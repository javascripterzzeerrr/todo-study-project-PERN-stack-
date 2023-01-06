import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("hello");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });

            window.location = "/"; //как только ответ будет получин, страница обновится
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Todo</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}

export default InputTodo;