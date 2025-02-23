export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error("API 请求失败:", error);
      return null;
    }
  };
  