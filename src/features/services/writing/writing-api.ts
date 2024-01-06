import axios from "axios";


const postInstructionApi = ({ instruction, submission }: { instruction: string, submission: string }) => {
    return axios.post('evalue', {
        submission,
        instruction
    });
}


const postGenInstructionApi = (topic: string) => {
    return axios.post('gen_instruction', {
        topic
    });
}
export default { postInstructionApi, postGenInstructionApi }