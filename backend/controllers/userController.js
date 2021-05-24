export let users = {
  Mike: {
    id: 'Mike',
    avatar: 'https://randomuser.me/api/portraits/men/49.jpg',
    createdPolls: ['98c1e68-3320-4157-18w7-84c2d1e7zxf1v'],
    answeredPolls: [],
    points: 1,
  },
  Carol: {
    id: 'Carol',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    createdPolls: [],
    answeredPolls: [],
    points: 0,
  },
  Jennifer: {
    id: 'Jennifer',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    createdPolls: [],
    answeredPolls: ['17w1v628-192q-1537-12x4-11a131j3tb6p'],
    points: 1,
  },
  Victor: {
    id: 'Victor',
    avatar: 'https://randomuser.me/api/portraits/men/16.jpg',
    createdPolls: [],
    answeredPolls: [],
    points: 0,
  },
};

export const getUsers = async (req, res) => {
  res.json(users);
};

export const getUser = async (req, res) => {
  res.json(users[req.params.userId]);
};

export const addUsers = async (req, res) => {
  users = req.body;
  res.json(users);
};
