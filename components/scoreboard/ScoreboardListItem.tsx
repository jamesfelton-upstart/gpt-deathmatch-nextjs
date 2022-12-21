import {Box} from "@upstart/patina-design-system";
import {ScoreboardEntry} from "../../models/ScoreboardEntry";

export function ScoreboardListItem(entry) {

    return(
        <Box>
            Score: {entry.score}
            Submitted by: {entry.submission.user.firstName}
            <div>
                <div>
                    Prompt: {entry.submission.gptPrompt}
                </div>
                <div>
                    {entry.submission.gptResponse}
                </div>
            </div>
        </Box>
    );
}