interface SimpleContactForm {
  name: string
  email: string
  message: string
}

export const submitSimpleContactUs = async (formData: SimpleContactForm): Promise<boolean> => {
  try {
    const response = await fetch(`/api/contactusform`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return true
  } catch (error) {
    console.error('Error submitting contact us form:', error)
    return false
  }
}

export const fetchFAQs = async () => {
  try {
    const response = await fetch(`/api/faqs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Backend error response:', data)
      throw new Error(data.message || `HTTP error! Status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error('Error fetching FAQs:', error)
    throw error
  }
}

export const fetchProjects = async () => {
  try {
    const response = await fetch(`/api/projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Backend error response:', data)
      throw new Error(data.message || `HTTP error! Status: ${response.status}`)
    }

    // Return the actual array of projects here
    return data.docs || [] // <-- Adjust if your array is under another key
  } catch (error) {
    console.error('Error fetching projects:', error)
    throw error
  }
}
