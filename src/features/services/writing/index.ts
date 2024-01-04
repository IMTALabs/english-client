import axios from "axios";


const postInstructionApi = ({ instruction, submission }: { instruction: string, submission: string }) => {
    return axios.post('https://briteshop.store/public/api/evalue', {
        submission,
        instruction
    });
}


const postGenInstructionApi = (topic: string) => {
    return axios.post('https://briteshop.store/public/api/gen_instruction    ', {
        topic
    });
}
export default { postInstructionApi, postGenInstructionApi }