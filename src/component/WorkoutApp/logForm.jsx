import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class LogForm extends Form {
  state = {
    data: {},
    errors: {}
  };

  generateSchema = exercises => {
    const schema = {};
    exercises.map(exercise => {
      let { name, sets } = exercise;
      name = name.replace(" ", "").toLowerCase();

      for (let i = 1; i <= sets; i++) {
        const schemaProp1 = `${name}rep${i}`;
        const schemaProp2 = `${name}weight${i}`;
        schema[schemaProp1] = this.generateSchemaProp1(schemaProp1);
        schema[schemaProp2] = this.generateSchemaProp2(schemaProp2);
      }
      return null;
    });

    return schema;
  };

  generateSchemaProp1 = prop => {
    return Joi.number()
      .required()
      .min(1)
      .max(30)
      .label("Reps");
  };

  generateSchemaProp2 = prop => {
    return Joi.number()
      .required()
      .min(1)
      .max(20)
      .label("Weight");
  };

  generateInputName = (exerciseName, inputType, setNumber) => {
    const exercise = exerciseName.replace(" ", "").toLowerCase();
    return `${exercise}${inputType}${setNumber}`;
  };

  generateData = (exercises, title) => {
    const stateData = {};
    const inputData = exercises.map(exercise => {
      let { name, sets } = exercise;
      let inputGroup = {
        title: "",
        rounds: []
      };

      inputGroup.title = name;

      for (let i = 1; i <= sets; i++) {
        const reps = this.generateInputName(name, "reps", i);
        const weight = this.generateInputName(name, "weight", i);
        stateData[reps] = 0;
        stateData[weight] = 0;

        inputGroup.rounds.push(
          this.renderInput(title, reps, "Reps", "number", 1, 30)
        );
        inputGroup.rounds.push(
          this.renderInput(title, weight, "Weight", "number", 1, 20)
        );
      }
      return inputGroup;
    });

    return {
      inputData: inputData,
      stateData: stateData
    };
  };

  schema = this.generateSchema(this.props.workout.exercises);

  componentDidUpdate() {
    console.log("State Data", this.state.data);
  }

  doSubmit = () => {
    const { workout } = this.props;
    const { exercises } = workout;
    const roundData = Object.keys({ ...this.state.data });
    console.log("Data has been submited to the server", roundData);

    //Reset input values
    this.setState({ data: this.generateData(exercises).stateData });
  };

  render() {
    const { workout } = this.props;
    const { exercises } = this.props.workout;
    let title = workout.title.replace(" ", "");
    const inputData = this.generateData(exercises, title).inputData;

    return (
      <div id="template-form">
        <form onSubmit={this.handleSubmit}>
          {inputData.map((input, i) => {
            return (
              <div>
                <h3>{input.title}</h3>
                {inputData[i].rounds.map(roundInput => {
                  return roundInput;
                })}
              </div>
            );
          })}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default LogForm;
