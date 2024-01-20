import { Icon } from 'src/assets/icon';
import Subtitle from 'src/components/typo/sub-title';

interface TitleCardProps {
  title: string;
  children: JSX.Element | JSX.Element[];
  topMargin?: string;
  TopSideButtons?: string | JSX.Element,
  titleStyle?: string
}


function TitleCard({ title, children, topMargin, TopSideButtons, titleStyle }: TitleCardProps) {
  return (
    <div
      className={
        'card w-full p-6 bg-base-100 border-gray-300 border ' + (topMargin || 'mt-6')
      }>
      {/* Title for Card */}
      {
        !title ? "" : <>
          <Subtitle styleClass={TopSideButtons ? 'inline-block' : ''}>
            <div className='flex items-center justify-between'>
              <p className={titleStyle}>{title}</p>
              {/* Top side button, show only if present */}
              {TopSideButtons && (

                <div className="flex items-center gap-4"><button className="btn btn-sm btn-secondary"> <span dangerouslySetInnerHTML={{ __html: Icon('download') }}></span> Download</button>{TopSideButtons}</div>
              )}
            </div>
          </Subtitle>

          <div className="divider mt-2"></div></>
      }

      {/** Card Body */}
      <div className="h-full w-full bg-base-100">{children}</div>
    </div>
  );
}

export default TitleCard;
