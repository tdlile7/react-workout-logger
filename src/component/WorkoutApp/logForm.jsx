import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";

class LogForm extends Form {
  state = {
    data: {
      exercises: []
    },
    errors: {}
  };

  schema = {
    reps: Joi.number()
      .required()
      .min(1)
      .max(30)
      .label("Reps"),
    weight: Joi.number()
      .required()
      .min(1)
      .max(20)
      .label("Weight")
  };

  doSubmit = () => {
    // const { onExerciseSubmit } = this.props;
    const log = { ...this.state.data };
    // onExerciseSubmit(exercise);
    console.log(log);

    //Reset input values
    const data = { ...this.state.data };
    const keys = Object.keys(data);
    keys.map(key => (data[key] = ""));
    this.setState({ data });
  };

  parseData = exercises => {
    return exercises.map(exercise => {
      const parsedExercise = {
        name: exercise.name,
        goal: exercise.reps,
        records: []
      };
      for (let i = 0; i < exercise.sets; i++) {
        parsedExercise.records.push(`Set Number:${i}`);
      }
      return parsedExercise;
    });
  };

  render() {
    const title = "Log Form";
    const { exercises } = this.props.workout;
    const parsedData = this.parseData(exercises);
    return (
      <div id="template-form">
        <form onSubmit={this.handleSubmit}>
          {parsedData.map(exercise => {
            const { name, goal, records } = exercise;
            return (
              <div>
                <p>
                  {name}(GOAL:{goal})
                </p>
                {records.map(() => {
                  return (
                    <div>
                      {this.renderInput(title, "reps", "Reps", "number", 1, 30)}
                      {this.renderInput(
                        title,
                        "weight",
                        "Weight",
                        "number",
                        1,
                        20
                      )}
                    </div>
                  );
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
