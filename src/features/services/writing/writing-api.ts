import axios from "axios";


const postInstructionApi = ({ instruction, submission }: { instruction: string, submission: string }) => {
    return axios.post('/english/v1/writing/evalue', {
        submission,
        instruction
    });
}


const postGenInstructionApi = (topic: string) => {
    return axios.post('/english/v1/writing/gen_instruction', {
        topic
    });
}
export default { postInstructionApi, postGenInstructionApi }