import React from 'react'

import { Container, SubContainer } from '@/components/Container'

type ServiceSectionProps = {
  label: string
  description: string
}

export function ServiceSection() {
  function serviceItem({ label, description }: ServiceSectionProps) {
    return (
      <div className="rounded-2xl border border-solid border-light p-6 relative max-w-[700px]">
        <article className="flex flex-col justify-between">
          {/* div com imagem */}
          <div className="pl-6 mt-2">
            <h2 className="text-light text-2xl font-bold">{label}</h2>
            <p className="text-light text-sm">{description}</p>
          </div>
        </article>
      </div>
    )
  }

  return (
    <Container label="service" className="bg-dark">
      <SubContainer>
        {serviceItem({ description: '', label: 'Service Section' })}
      </SubContainer>
    </Container>
  )
}
