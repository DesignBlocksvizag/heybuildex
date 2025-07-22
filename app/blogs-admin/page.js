'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BlogTable from "@/src/content/BlogForm";
import BlogsAdminLayout from "@/src/layout";

export default function BlogsAdmin() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/admin-login');
    }
  }, []);

  return (
    <BlogsAdminLayout>
      <BlogTable />
    </BlogsAdminLayout>
  );
}
