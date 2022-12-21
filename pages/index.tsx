import {CookiesProvider} from "react-cookie";
import {LoginHeader} from "../components/LoginHeader";
import {PromptBox} from "../components/create-submission/PromptBox";
import {Scoreboard} from "../components/scoreboard/Scoreboard";
export default function HomePage() {

    return (
        <CookiesProvider>
            <div>
                <header>
                    <LoginHeader/>
                </header>
                <PromptBox/>
                <Scoreboard/>
            </div>
        </CookiesProvider>
    );
}