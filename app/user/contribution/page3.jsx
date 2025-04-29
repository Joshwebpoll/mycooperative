"use client"; // or omit if using Pages Router

import { useEffect } from "react";

import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import contributionStore from "../userStore/contributionStore";

const PostsPage = () => {
  const {
    fetchcontributions,
    contribution,
    page,
    lastPage,
    setPage,
    setPerPage,
    perPage,
    meta,
    loading,
    currentPage,
  } =
    // console.log(page);
    contributionStore();

  useEffect(() => {
    fetchcontributions(currentPage);
  }, [currentPage]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Posts Table</h1>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Body</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3}>Loading...</TableCell>
              </TableRow>
            ) : (
              contribution.map((post) => (
                <TableRow key={post.id}>
                  <TableCell>{post.transaction_id}</TableCell>
                  <TableCell>{post.contribution_type}</TableCell>
                  <TableCell>{post.account_number}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex gap-2 mt-4">
        <Button
          onClick={() => fetchcontributions(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Previous
        </Button>
        <Button
          onClick={() => fetchcontributions(currentPage + 1)}
          disabled={meta && currentPage >= meta.last_page}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PostsPage;
