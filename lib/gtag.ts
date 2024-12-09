export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

type GTagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) return

  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  } catch (error) {
    console.error('Error sending pageview to Google Analytics:', error)
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (!GA_TRACKING_ID) return

  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  } catch (error) {
    console.error('Error sending event to Google Analytics:', error)
  }
} 