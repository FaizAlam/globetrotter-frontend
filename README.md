# 🌍 Globetrotter

A geography guessing game where users get cryptic clues about famous destinations and must guess the correct location. Test your geography knowledge and challenge your friends!

## 🚀 Features

- **Geography Quiz**: Get cryptic clues about famous destinations and guess the correct location
- **Instant Feedback**: Receive immediate feedback with fun facts about the destination
- **Score Tracking**: Keep track of your correct and incorrect answers
- **Challenge Friends**: Generate unique invite links to challenge friends
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth transitions
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) for accessible components
  - [Lucide Icons](https://lucide.dev/) for beautiful icons
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) for celebration animations
- **Backend**: Django
- **Database**: Redis

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/FaizAlam/Globetrotter--1.git
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔌 API Integration

The app integrates with the following backend endpoints:

- `/game/user/register/` - User registration (POST)
- `/game/random_question/` - Fetch random question (GET)
- `/game/submit_answer/` - Submit answer (POST)
- `/game/invite/` - Generate invite link (GET)
- `/game/invite/<username>/` - Get user score (GET)

## 🎮 Game Flow

1. Users can start playing immediately without registration
2. Registration is only required when challenging friends
3. When playing from an invite link, users can see the inviter's score
4. Each question provides:
   - A cryptic clue about a destination
   - Multiple choice answers
   - Fun facts after answering
   - Score tracking

## 🎨 Design Choices

- **Gradient Backgrounds**: Creates an engaging and modern look
- **Card-based UI**: Clear separation of content and improved readability
- **Animations**: Smooth transitions and feedback for user interactions
- **Responsive Layout**: Adapts to different screen sizes
- **Dark Mode Support**: Comfortable viewing in any lighting condition

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | Yes |

## 📱 Progressive Enhancement

- Works without JavaScript for basic content
- Enhanced with JavaScript for interactive features
- Responsive design works on all devices
- Accessible with keyboard navigation and screen readers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.