import githubIcon from '../../assets/image.png';

interface UserInfoProps {
  name: string;
  tag: string;
  bio: string;
  joinDate: string;
  githubLink: string;
  repoCount: string;
  followersCount: string;
  followingCount: string;
}

const UserInfo = (props: UserInfoProps) => {
  const {
    name,
    bio,
    tag,
    joinDate,
    githubLink,
    repoCount,
    followersCount,
    followingCount,
  } = props;

  return (
    <div className='flex w-[730px] h-[395px] bg-white rounded-2xl'>
      <div className='flex flex-row w-full py-10 px-10 '>
        <img
          className='w-117px] h-[117px] rounded-full'
          src={githubIcon}
          alt=''
        />

        <div className='flex flex-col py-2 px-8 w-full'>
          <div className='flex justify-between'>
            <div className=''>
              <p className='text-3xl '>{name}</p>
              <a className='text-blue-400' href={githubLink}>
                {tag}
              </a>
            </div>

            <div className=''>
              <p>{joinDate}</p>
            </div>
          </div>

          <p className='py-8 text-gray-500'>
            {bio ? bio : 'This profile has no info'}
          </p>

          <div className='w-full bg-gray-100 h-[100px] rounded-2xl flex justify-between flex-row px-8 items-center'>
            <div className=''>
              <p>Repos</p>
              <p>{repoCount}</p>
            </div>
            <div className=''>
              <p>Followers</p>
              <p>{followersCount}</p>
            </div>

            <div className=''>
              <p>Following</p>
              <p>{followingCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
