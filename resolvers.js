import mongoose from 'mongoose';
import authorModel from './models/author';

const resolvers = {
  Query: {
    authors: (root, {age}) => {
      return authorModel.find({age});
    },
    author: (root, {id}) => {
      return authorModel.findOne({id});
    }
  },

  Mutation: {
    addAuthor: (root, {name, age, books}) => {
      const author = new authorModel({age, name, books});
      return author.save();
    },
    deleteAuthor: (root, {id}) => {
      return authorModel.findOneAndRemove({id});
    },
    updateAuthor: (root, {id, name, age, books}) => {
      return authorModel.findOneAndUpdate({id}, {name, age, books});
    }
  }
};

export default resolvers;
