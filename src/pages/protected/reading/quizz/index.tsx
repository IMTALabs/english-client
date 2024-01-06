import AssignmentContent from "src/components/assignment-content"
import AssignmentQuizz from "src/components/assignment-quizz"


const QuizzReading = () => {
    const data = {
        "form": [
            {
                "question": "Which of the following headings best summarizes the main idea of the article?",
                "choices": {
                    "A": "The importance of family support in personal development",
                    "B": "The key role of family in building a successful life",
                    "C": "Strategies for maintaining a happy family life",
                    "D": "The impact of family relationships on mental health"
                },
                "explanation": "B: The key role of family in building a successful life is the most accurate summary of the main idea of the article. The article emphasizes the importance of family in personal development and discusses how family support and relationships contribute to a flourishing life.",
                "answer": "B"
            },
            {
                "question": "According to the article, what is one of the negative consequences of lacking a supportive family?",
                "choices": {
                    "A": "Poor academic performance",
                    "B": "Increased risk of mental illness",
                    "C": "Loneliness and isolation",
                    "D": "Inability to maintain successful relationships"
                },
                "explanation": "C: The article mentions that lacking a supportive family can result in loneliness and isolation, as individuals may lack a strong support system. This aligns with the negative consequences mentioned in the article.",
                "answer": "C"
            }
        ],
        "paragraph": "Your Family: The Foundation of a Flourishing Life"
    }
    return (
        <div>
            <div className='grid lg:grid-cols-2 '>
                <div>
                    <AssignmentContent paragraph={data?.paragraph} />
                </div>
                <div>
                    <AssignmentQuizz form={data?.form} />
                </div>
            </div>
        </div>
    )
}

export default QuizzReading