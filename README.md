<h2 align="center">Mini Blog - A blog reading and writting website</h2>

1. ⚙️ [Tech Stack](#tech-stack)
2. 🤸 [Quick Start](#quick-start)
3. 🕸️ [Config Files](#config-files)
4. 🚀 [More](#more)

## <a name="tech-stack">⚙️ Tech Stack</a>

- React 19
- Next.js 15
- TailwindCSS
- ShadCN
- TypeScript

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Cloning the Repository**

```bash
git clone https://github.com/SubhamSaha9/mini-blog-frontend.git
cd mini-blog-frontend
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
#or
npm i
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_BASE_API=http://localhost:8080/api/v1
```

Replace the value with your actual credentials.

**Running the Project**

```bash
npm run dev
```

## <a name="config-files">🕸️ Config Files</a>

<details>
<summary><code>api.ts</code></summary>

```typescript
import axios from "axios";
import {
  setLoading,
  setError,
  setPosts,
  addPost,
  updatePostInState,
  removePost,
} from "@/slice/postsSlice";
import { AppDispatch } from "@/store";
import { AdminPost, CreatePostData } from "@/lib/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_API;

// Create axios instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    console.log(
      `Making ${config.method?.toUpperCase()} request to ${config.url}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorMessage =
      error.response?.data?.error ||
      error.message ||
      "An unexpected error occurred";
    console.log("API Error:", errorMessage);
    return new Error(errorMessage);
  }
);

// Admin Posts API Functions
export async function fetchAdminPosts(dispatch: AppDispatch) {
  dispatch(setLoading(true));
  dispatch(setError(null));

  try {
    const { data } = await apiClient.get("/admin/posts");
    const res = data?.data;
    dispatch(setPosts(res));
    return res;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to fetch posts";
    dispatch(setError(errorMessage));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
}

export async function createAdminPost(
  postData: CreatePostData,
  dispatch: AppDispatch
) {
  dispatch(setLoading(true));
  dispatch(setError(null));

  try {
    const { data } = await apiClient.post("/admin/posts", postData);
    dispatch(addPost(data.data));
    return data.data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to create post";
    dispatch(setError(errorMessage));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
}

export async function updateAdminPost(
  id: string,
  postData: Partial<AdminPost>,
  dispatch: AppDispatch
) {
  dispatch(setLoading(true));
  dispatch(setError(null));

  try {
    const { data } = await apiClient.put(`/admin/posts/${id}`, postData);
    dispatch(updatePostInState(data.data));
    return data.data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to update post";
    dispatch(setError(errorMessage));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
}

export async function deleteAdminPost(id: string, dispatch: AppDispatch) {
  dispatch(setLoading(true));
  dispatch(setError(null));

  try {
    await apiClient.delete(`/admin/posts/${id}`);
    dispatch(removePost(id));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to delete post";
    dispatch(setError(errorMessage));
    throw error;
  } finally {
    dispatch(setLoading(false));
  }
}
```

</details>

## <a name="more">🚀 More</a>

For more such projects visit my [Github](https://github.com/SubhamSaha9) page.
