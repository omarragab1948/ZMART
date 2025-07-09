export function setStorage(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Set storage error:", error);
  }
}

export function getStorage<T>(key: string): T | null {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) as T : null;
  } catch (error) {
    console.warn("Get storage error:", error);
    return null;
  }
}
