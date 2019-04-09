import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";

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
      .max(200)
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
          <div className="set-group">
            <h4 className="set-number">
              <div>Set</div>
              <div>{`${i}`}</div>
            </h4>
            {this.renderInput(title, reps, "Reps", "number", 1, 30)}
            {this.renderInput(title, weight, "Weight", "number", 1, 200)}
          </div>
        );
      }
      return inputGroup;
    });

    return inputs;
  };

  schema = this.generateSchema();

  doSubmit = () => {
    const { onLogSubmit } = this.props;
    const { workout } = this.state;
    const stateData = this.state.data;
    const stateDataKeys = Object.keys(this.state.data);
    let counter = 0;

    const records = workout.exercises.map(exercise => {
      const { name, sets } = exercise;
      const data = [];
      for (let i = 0; i < sets; i++) {
        const round = {
          set: i + 1,
          reps: stateData[stateDataKeys[counter]],
          weight: stateData[stateDataKeys[counter + 1]]
        };
        counter += 2;
        data.push(round);
      }

      return { name, data };
    });

    const newLog = {
      title: workout.title,
      records
    };
    console.log("New Log Submitted:", newLog);
    onLogSubmit(newLog);

    const data = { ...this.state.data };
    const keys = Object.keys(data);
    keys.map(key => (data[key] = 0));
    this.setState({ data });
  };

  render() {
    const { workout } = this.state;
    const { exercises } = workout;
    let title = workout.title.replace(" ", "");
    const inputs = this.generateInputs(exercises, title);

    return (
      <form id="log-form" onSubmit={this.handleSubmit}>
        <h2>Log Form</h2>
        <div id="exercises-container">
          {inputs.map((input, i) => {
            return (
              <div className="exercise-group">
                <h3>{`#${i + 1}: ${input.title}`}</h3>
                {inputs[i].rounds.map(roundInput => {
                  return roundInput;
                })}
              </div>
            );
          })}
        </div>
        <div className="save-button">{this.renderButton("Save")}</div>
      </form>
    );
  }
}

export default LogForm;
