import React from 'react'

interface LandingCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export default function LandingCard({ icon, title, description }: LandingCardProps) {
  return (
    <div className="flex flex-col items-center w-72 p-4 text-center border border-app_primary rounded-lg gap-4">
      {icon && icon}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
