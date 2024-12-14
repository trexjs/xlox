import { DataTable } from "./datatable";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { DialogTrigger } from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { apiData } from "./db";
import { ApplyToJob } from "./apply-to-job";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
type JobSchema = {
  id: number;
  job_title: string;
  category: string;
  status: string;
  salary: string;
  location: string;
  posted_by: string;
  createdAt: string;
};

// Schema for Filter by Cluster
const FormSchema = z.object({
  cluster: z.string(),
});

// Schema for search
const searchSchema = z.object({
  searchTerm: z.string(),
});

const raiseToast = (
  msg: string,
  variant: "default" | "destructive" | null | undefined
) =>
  toast({
    title: msg,
    variant,
  });

export const JobOpeningsPage = () => {
  const navigate = useNavigate();
  // Form initialization for filter by cluster
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cluster: "none",
    },
  });

  // Form Intialization for search
  const searchForm = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchTerm: "",
    },
  });

  const [cluster, setCluster] = useState("");
  const [page, setPage] = useState(1);

  const columns: ColumnDef<JobSchema>[] = [
    {
      accessorKey: "job_title",
      header: "Job Title",
      cell: ({ row }) => {
        const job_title: any = row.getValue("job_title");

        return <div className="text-xs">{job_title}</div>;
      },
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => {
        const category: string = row.getValue("category");

        return <div className="text-xs capitalize">{category}</div>;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status: any = row.getValue("status");

        return <div className="text-xs">{status}</div>;
      },
    },
    {
      accessorKey: "salary",
      header: "Salary",
      cell: ({ row }) => {
        const salary: any = row.getValue("salary");

        return (
          <>
            <div className="text-xs">{salary}</div>
          </>
        );
      },
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => {
        const location: any = row.getValue("location");

        return <div className="text-xs">{location}</div>;
      },
    },
    {
      accessorKey: "_id",
      header: "Actions",
      cell: ({ row }) => {
        const clickedRow = (obj: any) => {
          navigate(`/cms/approval/${obj.id}`);
          // setSelectedManager(obj);
        };
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DialogTrigger
                onClick={() =>
                  clickedRow({
                    name: row.getValue("name"),
                    id: row.getValue("_id"),
                  })
                }
              >
                <DropdownMenuItem>Details</DropdownMenuItem>
              </DialogTrigger>

              <ApplyToJob />
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const onSelect = (e: any) => {
    setCluster(e);
  };

  return (
    <>
      <div className="bg-white min-h-screen">
        <h1 className="font-bold text-xl mb-5">Current Openings</h1>
        <div className="flex justify-between items-center mb-5">
          <Form {...form}>
            <form className="md:w-1/4">
              <FormItem>
                <FormLabel>Filter By Content Type</FormLabel>
                <Select onValueChange={onSelect} defaultValue={cluster}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value={"none"}>None</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            </form>
          </Form>

          <Form {...searchForm}>
            <FormField
              control={searchForm.control}
              name="searchTerm"
              render={({ field }) => (
                <FormItem className="md:w-1/4">
                  <FormLabel>Search by name/mobile</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      onChange={(e: any) => {
                        field.onChange(e);
                        // _.debounce(() => setSearchValue(e.target.value), 2000)();
                      }}
                      placeholder="Search by mobile or name"
                      className="bg-white text-black outline-none h-10"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </Form>
        </div>
        {apiData?.length > 0 ? (
          <Dialog>
            <DataTable
              columns={columns}
              data={apiData}
              setPage={setPage}
              totalRows={5}
              page={page}
            />
          </Dialog>
        ) : (
          <div className="flex justify-center items-center h-64 border-customColors-secondary_gray border-2 rounded-sm">
            <h1>No Data</h1>
          </div>
        )}
      </div>
    </>
  );
};
