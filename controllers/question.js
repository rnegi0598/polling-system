const Question = require("../models/question");
const Option = require("../models/option");

const createQuestion = async (req, res) => {
  const { title } = req.body;
  console.log(title);
  const question = new Question({ title });
  const savedQuestion = await question.save();
  res.json(savedQuestion);
};

const createOption = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const option = new Option({ text, questionId: id });
  const savedOption = await option.save();
  const optionId = savedOption._id;
  savedOption.link_to_vote = `localhost:5173/options/${optionId}/add_vote`;
  const updatedOption = await savedOption.save();
  //save this option to the question
  const question = await Question.findById(id);
  question.options.push(optionId);
  await question.save();
  res.json(updatedOption);
};

const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  //check if any option has any vote
  const question = await Question.findById(id).populate("options").exec();
  const options = question.options;
  console.log(options);
  const anyNonZeroVotes = options.some((option) => {
    if (option.votes !== 0) {
      return true;
    } else {
      return false;
    }
  });
  //if anyNonZeroVotes is true means there are options with non-zero votes
  //In that case we don't need to delete question
  if (anyNonZeroVotes) {
    return res.json({
      error:
        "Qestion cannot be deleted ,one of the options having votes greater than 1",
    });
  }
  //all the votes are zero and the question can be deleted
  //delete all it options
  for (let i = 0; i < options.length; i++) {
    await Option.deleteOne({ _id: options[i]._id });
  }
  //delete the question
  const deletedQuestion = await Question.deleteOne({ _id: id });
  res.json(deletedQuestion);
};

const getQuestion = async (req, res) => {
  const {id}=req.params;
  const question= await Question.findById(id).populate('options').exec();
  res.json(question);
};

module.exports = {
  createQuestion,
  createOption,
  deleteQuestion,
  getQuestion,
};
