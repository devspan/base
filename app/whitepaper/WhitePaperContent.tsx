'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'

const WhitepaperContent: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const whitepaperUrl = "https://github.com/rupaya-project/rupaya-whitepaper/blob/main/whitepaper.md"

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl mx-auto"
    >
      <motion.h1 
        variants={itemVariants}
        className="text-4xl font-extrabold text-center mb-8 text-foreground"
      >
        Rupaya Whitepaper
      </motion.h1>
      
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Read Our Whitepaper on GitHub</CardTitle>
            <CardDescription>Explore Rupaya's vision, technology, and roadmap</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Our comprehensive whitepaper outlines Rupaya's mission to revolutionize finance in South Asia through decentralized technology. We've chosen to host our whitepaper on GitHub for several reasons:
            </p>
            <ul className="list-disc pl-5 mb-4 text-muted-foreground">
              <li>Transparency: Everyone can see the document's history and any updates we make.</li>
              <li>Collaboration: The community can suggest improvements or translations through pull requests.</li>
              <li>Accessibility: It's easy to read online or download in various formats.</li>
              <li>Version Control: We can maintain different versions and branches of the whitepaper as our project evolves.</li>
            </ul>
            <div className="flex items-center space-x-2">
              <GithubIcon className="text-muted-foreground" />
              <span className="text-muted-foreground">Hosted on GitHub</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <a href={whitepaperUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLinkIcon className="mr-2 h-4 w-4" /> View Whitepaper on GitHub
              </a>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8 text-center">
        <p className="text-muted-foreground">
          For any questions about our whitepaper or Rupaya's vision, please don't hesitate to <a href="/contact" className="text-primary hover:underline">contact us</a>.
        </p>
      </motion.div>
    </motion.div>
  )
}

export default WhitepaperContent