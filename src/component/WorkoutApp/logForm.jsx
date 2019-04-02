import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class LogForm extends Form {
  state = {
    workout: { ...JSON.parse(localStorage.getItem("workout")) },
    data: { ...JSON.parse(localStorage.getItem("data")) },
    errors: {}
  };

  generateSchema = () => {
    const { workout } = this.state;
    const { exercises } = workout;
    const schema = {};

    exercises.map(exercise => {
      let { name, sets } = exercise;
      name = name.replace(" ", "").toLowerCase();

      for (let i = 1; i <= sets; i++) {
        const schemaProp1 = `${name}reps${i}`;
        const schemaProp2 = `${name}weight${i}`;
        schema[schemaProp1] = this.generateSchemaProp1();
        schema[schemaProp2] = this.generateSchemaProp2();
      }
      return null;
    });

    return schema;
  };

  generateSchemaProp1 = () => {
    return Joi.number()
      .required()
      .min(1)
      .max(30)
      .label("Reps");
  };

  generateSchemaProp2 = () => {
    return Joi.number()
      .required()
      .min(1)
      .max(20)
      .label("Weight");
  };

  generateInputs = (exercises, title) => {
    const { generateInputName } = this.props;
    const inputs = exercises.map(exercise => {
      let { name, sets } = exercise;
      let inputGroup = {
        title: "",
        rounds: []
      };

      inputGroup.title = name;

      for (let i = 1; i <= sets; i++) {
        const reps = generateInputName(name, "reps", i);
        const weight = generateInputName(name, "weight", i);

        inputGroup.rounds.push(
          this.renderInput(title, reps, "Reps", "number", 1, 30)
        );
        inputGroup.rounds.push(
          this.renderInput(title, weight, "Weight", "number", 1, 20)
        );
      }
      return inputGroup;
    });

    return inputs;
  };

  schema = this.generateSchema();

  doSubmit = () => {
    const roundData = Object.keys({ ...this.state.data });
    console.log("Data has been submited to the server", roundData);
  };

  render() {
    const { workout } = this.state;
    const { exercises } = workout;
    let title = workout.title.replace(" ", "");
    const inputs = this.generateInputs(exercises, title);

    return (
      <div id="template-form">
        <form onSubmit={this.handleSubmit}>
          {inputs.map((input, i) => {
            return (
              <div>
                <h3>{input.title}</h3>
                {inputs[i].rounds.map(roundInput => {
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
