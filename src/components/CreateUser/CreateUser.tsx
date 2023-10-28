import React, { useState } from "react";
import { TextInput } from "../TextInput";
import { useCreateUserMutation } from "../../store/api/usersApi";
import styles from './CreateUser.module.css';

export const CreateUser = () => {
  const [ createUser ] = useCreateUserMutation();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

	const submitHandler = () => {
		console.log(`firstName: ${firstName}, lastName: ${lastName}`);
		if (firstName !== "" && lastName !== "") {
			setFeedback(`Hej ${firstName} ${lastName}, välkommen!`);
      setSubmitted(true);
			setFirstName("");
			setLastName("");
			setTimeout(() => {
				setFeedback("");
			}, 3000);
      createUser({
        user: {
          firstName: firstName,
          lastName: lastName
        }
      })
		} else {
        setSubmitted(false);
        setFeedback("Fyll i rutorna");
        setTimeout(() => {
          setFeedback("");
        }, 3000);
		}
	};

	return (
		<div className={styles.container}>
			<TextInput
				value={firstName}
				placeholder="Förnamn"
				onInput={(event) => {
					setFirstName(event.target.value);
				}}
			/>
			<TextInput
				value={lastName}
				placeholder="Efternamn"
				onInput={(event) => {
					setLastName(event.target.value);
				}}
			/>
			<button
        className={styles.submitButton}
        onClick={submitHandler}
      >Skapa användare</button>
			<p
        className={styles.feedbackText}
        style={{ color: submitted ? '#3c425c' : '#ed4e59'}}
      >{feedback}</p>
		</div>
	);
};
