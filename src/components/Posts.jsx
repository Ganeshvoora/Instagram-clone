import React from 'react'
import Post from './Post'
const fakePosts = [
    
    {
      id: "post002",
      user: {
        username: "travel_diaries",
        fullName: "Mehak Sharma",
        profileImage: "https://i.pravatar.cc/150?img=10"
      },
      imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      caption: "Sunsets and palm trees 🌴🌅",
      likes: 789,
      isLikedByCurrentUser: true,
      postedAt: "3 hours ago",
      comments: [
        {
          id: "cmt002",
          username: "wanderer_raj",
          profileImage: "https://i.pravatar.cc/150?img=11",
          comment: "Where is this? 😍",
          postedAt: "2h ago"
        }
      ]
    },
    {
      id: "post004",
      user: {
        username: "chef_ria",
        fullName: "Ria Kapoor",
        profileImage: "https://i.pravatar.cc/150?img=12"
      },
      imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      caption: "Tried a new pasta recipe today 🍝",
      likes: 525,
      isLikedByCurrentUser: true,
      postedAt: "1 day ago",
      comments: [
        {
          id: "cmt003",
          username: "foodie_sam",
          profileImage: "https://i.pravatar.cc/150?img=17",
          comment: "Yummm! Looks delicious 🤤",
          postedAt: "22h ago"
        }
      ]
    },
    {
      id: "post005",
      user: {
        username: "artsy_ava",
        fullName: "Ava Sinha",
        profileImage: "https://i.pravatar.cc/150?img=7"
      },
      imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      caption: "A quick digital painting I did this morning 🎨✨",
      likes: 689,
      isLikedByCurrentUser: true,
      postedAt: "10 hours ago",
      comments: []
    },
    {
      id: "post006",
      user: {
        username: "music_addict",
        fullName: "Neil Das",
        profileImage: "https://i.pravatar.cc/150?img=6"
      },
      imageUrl: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
      caption: "My new setup 🎧🔥 #MusicIsLife",
      likes: 412,
      isLikedByCurrentUser: false,
      postedAt: "6 hours ago",
      comments: [
        {
          id: "cmt004",
          username: "dj_laya",
          profileImage: "https://i.pravatar.cc/150?img=14",
          comment: "That mic tho! 🔥🔥",
          postedAt: "5h ago"
        }
      ]
    },
    {
      id: "post007",
      user: {
        username: "bookworm_ash",
        fullName: "Ashita Rao",
        profileImage: "https://i.pravatar.cc/150?img=9"
      },
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      caption: "Sundays are for reading 📚☕",
      likes: 320,
      isLikedByCurrentUser: false,
      postedAt: "8 hours ago",
      comments: []
    },
    {
      id: "post009",
      user: {
        username: "plant_lover",
        fullName: "Sneha Pillai",
        profileImage: "https://i.pravatar.cc/150?img=18"
      },
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      caption: "New additions to my indoor jungle 🌿💚",
      likes: 450,
      isLikedByCurrentUser: false,
      postedAt: "12 hours ago",
      comments: []
    },
    {
      id: "post010",
      user: {
        username: "night_photog",
        fullName: "Yash Choudhary",
        profileImage: "https://i.pravatar.cc/150?img=19"
      },
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "City lights, camera, click 🌃📸",
      likes: 543,
      isLikedByCurrentUser: true,
      postedAt: "14 hours ago",
      comments: [
        {
          id: "cmt006",
          username: "shutterbug",
          profileImage: "https://i.pravatar.cc/150?img=13",
          comment: "Bro this is sick 🔥",
          postedAt: "13h ago"
        },
      ]
    },
    {
      id: "post002",
      user: {
        username: "travel_diaries",
        fullName: "Mehak Sharma",
        profileImage: "https://i.pravatar.cc/150?img=10"
      },
      imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      caption: "Sunsets and palm trees 🌴🌅",
      likes: 789,
      isLikedByCurrentUser: true,
      postedAt: "3 hours ago",
      comments: [
        {
          id: "cmt002",
          username: "wanderer_raj",
          profileImage: "https://i.pravatar.cc/150?img=11",
          comment: "Where is this? 😍",
          postedAt: "2h ago"
        }
      ]
    },
    {
      id: "post004",
      user: {
        username: "chef_ria",
        fullName: "Ria Kapoor",
        profileImage: "https://i.pravatar.cc/150?img=12"
      },
      imageUrl: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      caption: "Tried a new pasta recipe today 🍝",
      likes: 525,
      isLikedByCurrentUser: true,
      postedAt: "1 day ago",
      comments: [
        {
          id: "cmt003",
          username: "foodie_sam",
          profileImage: "https://i.pravatar.cc/150?img=17",
          comment: "Yummm! Looks delicious 🤤",
          postedAt: "22h ago"
        }
      ]
    },
    {
      id: "post005",
      user: {
        username: "artsy_ava",
        fullName: "Ava Sinha",
        profileImage: "https://i.pravatar.cc/150?img=7"
      },
      imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
      caption: "A quick digital painting I did this morning 🎨✨",
      likes: 689,
      isLikedByCurrentUser: true,
      postedAt: "10 hours ago",
      comments: []
    },
    {
      id: "post006",
      user: {
        username: "music_addict",
        fullName: "Neil Das",
        profileImage: "https://i.pravatar.cc/150?img=6"
      },
      imageUrl: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
      caption: "My new setup 🎧🔥 #MusicIsLife",
      likes: 412,
      isLikedByCurrentUser: false,
      postedAt: "6 hours ago",
      comments: [
        {
          id: "cmt004",
          username: "dj_laya",
          profileImage: "https://i.pravatar.cc/150?img=14",
          comment: "That mic tho! 🔥🔥",
          postedAt: "5h ago"
        }
      ]
    },
    {
      id: "post007",
      user: {
        username: "bookworm_ash",
        fullName: "Ashita Rao",
        profileImage: "https://i.pravatar.cc/150?img=9"
      },
      imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      caption: "Sundays are for reading 📚☕",
      likes: 320,
      isLikedByCurrentUser: false,
      postedAt: "8 hours ago",
      comments: []
    },
    {
      id: "post009",
      user: {
        username: "plant_lover",
        fullName: "Sneha Pillai",
        profileImage: "https://i.pravatar.cc/150?img=18"
      },
      imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      caption: "New additions to my indoor jungle 🌿💚",
      likes: 450,
      isLikedByCurrentUser: false,
      postedAt: "12 hours ago",
      comments: []
    },
    {
      id: "post010",
      user: {
        username: "night_photog",
        fullName: "Yash Choudhary",
        profileImage: "https://i.pravatar.cc/150?img=19"
      },
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "City lights, camera, click 🌃📸",
      likes: 543,
      isLikedByCurrentUser: true,
      postedAt: "14 hours ago",
      comments: [
        {
          id: "cmt006",
          username: "shutterbug",
          profileImage: "https://i.pravatar.cc/150?img=13",
          comment: "Bro this is sick 🔥",
          postedAt: "13h ago"
        },
      ]
    }
  ];
  
const Posts = () => {
  return (
    <div>
        {
            fakePosts.map((post) => (
                <Post details={post} />
            ))
        }
      
    </div>
  )
}

export default Posts
