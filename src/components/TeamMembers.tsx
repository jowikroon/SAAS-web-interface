import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

interface TeamMember {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Lottie',
    email: 'lozzieworkly@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=L&background=6366f1&color=fff'
  },
  {
    id: 2,
    name: 'Adam',
    email: 'adamsmith@gmail.com',
    avatar: 'https://ui-avatars.com/api/?name=A&background=6366f1&color=fff'
  }
];

export default function TeamMembers() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Team</h2>
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="font-medium">{member.name}</p>
                <p className="text-sm text-gray-500">{member.email}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-50 rounded-full">
              <ChatBubbleLeftIcon className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}