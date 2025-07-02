"use client"

export interface SavedItem {
  id: string
  title: string
  artist: string
  image: string
  price?: number
  category: string
  savedAt: string
}

const SAVED_ITEMS_KEY = "saved-items"

export function getSavedItems(): SavedItem[] {
  if (typeof window === "undefined") return []

  try {
    const saved = localStorage.getItem(SAVED_ITEMS_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export function saveItem(item: Omit<SavedItem, "savedAt">): void {
  if (typeof window === "undefined") return

  const savedItems = getSavedItems()
  const newItem: SavedItem = {
    ...item,
    savedAt: new Date().toISOString(),
  }

  const updatedItems = savedItems.filter((saved) => saved.id !== item.id)
  updatedItems.unshift(newItem)

  localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(updatedItems))
}

export function removeSavedItem(id: string): void {
  if (typeof window === "undefined") return

  const savedItems = getSavedItems()
  const updatedItems = savedItems.filter((item) => item.id !== id)

  localStorage.setItem(SAVED_ITEMS_KEY, JSON.stringify(updatedItems))
}

export function isItemSaved(id: string): boolean {
  const savedItems = getSavedItems()
  return savedItems.some((item) => item.id === id)
}
