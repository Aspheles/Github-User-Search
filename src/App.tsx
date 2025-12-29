import Input from './components/ui/Input';
import UserInfo from './components/ui/UserInfo';

function App() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-[1440px] p-2'>
        <div className='flex flex-col justify-center items-center'>
          <Input
            type='text'
            placeholder='Search github users...'
            text='Search'
          />

          <UserInfo
            name='Octodad'
            tag='@octodad'
            joinDate='25 September 2022'
            bio=''
            githubLink=''
            repoCount='22'
            followersCount='999'
            followingCount='2000'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
