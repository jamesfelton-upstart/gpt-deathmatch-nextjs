import React, {useState} from "react";
import {useCookies} from "react-cookie";
export function PromptBox() {

    const cookies = useCookies(['sessionToken'])[0]
    const [prompt, setPrompt] = useState("");
    const [gptResponse, setGptResponse] = useState("This is where the response will be displayed.");
    const submitPrompt = () => {
        if (!prompt) {
            return;
        }

        const body = {
            sessionToken: cookies['sessionToken'],
            gptPrompt: prompt,
        };

        const reqOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        }

        fetch(process.env.API_HOSTNAME + "/submission", reqOptions)
            .then(res => res.json())
            .then((result) => {
                setGptResponse(result.gptResponse);
            });
    }

    return (
        <form onSubmit={submitPrompt}>
            <label>Prompt for GPT3</label>
            <input type="text" value={prompt} onChange={setPrompt}
                  placeholder="Provide directions for GPT3 to which it will create a response.
                  For example: Write a song about ruby in the style of the rap group Wu-Tang Clan" />
            <br/>
            <div>
                <p>{gptResponse}</p>
            </div>
            <button type="submit">Submit Prompt</button>
        </form>
    )

}