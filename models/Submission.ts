import type {User} from "./User";

export type Submission = {
    gptPrompt: string,
    gptResponse: string,
    user: User,
}