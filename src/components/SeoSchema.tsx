export default function SeoSchema() {
 return (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Bhanuteja",
        "url": "https://www.nallamothubhanuteja.dev/",
        "jobTitle": "Freelance Full Stack Developer",
        "sameAs": [
          "https://www.linkedin.com/in/bhanuteja-nallamothu-4b8677315/"
        ],
        "knowsAbout": [
          "UI Development",
          "Full Stack Development",
          "Cloud Architecture",
          "React",
          "Next.js",
          "Node.js",
          "AWS"
        ]
      })
    }}
  />
 )
}
