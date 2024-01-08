import React from 'react'
import TitleCard from 'src/components/cards/title-card'

type Props = {}

const dataForm = [
    {
        image: "https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg",
        nameCard: "Members only",
        title: "Can coffee make you a better developer?",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisihil.'
    },
    {
        image: "https://i.pinimg.com/originals/58/94/70/58947055dab9ae19404a4ec5e3c30b3c.jpg",
        nameCard: "Members only",
        title: "Can coffee make you a better developer?",
        description: 'Lorem ipsum dolor sit amet, consectetur adipisihil.'
    }
]
const RightSidebarPageContent = (props: Props) => {
    return (
        <TitleCard title="" topMargin="mt-2">
            {
                dataForm?.map((item, index) => {
                    return <div className="max-w-sm w-full lg:max-w-full lg:flex" key={index}>
                        <img src={item.image} alt="" className='h-40 w-30' />
                        <div className=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <div className="mb-8">
                                <p className="text-sm flex items-center">
                                    {item.nameCard}
                                </p>
                                <div className=" font-bold text-xl mb-2">{item.title}</div>
                                <p className=" text-base">{item.description}</p>
                            </div>
                        </div>
                    </div>

                })
            }

        </TitleCard>
    )
}

export default RightSidebarPageContent