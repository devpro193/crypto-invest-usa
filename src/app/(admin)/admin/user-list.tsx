import { Badge } from "@/components/ui/badge";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
// import prisma from "@/util/priTempUsersmaClient";
// import { User } from "@prisma/client";
import React from "react";

// async function getUser(): Promise<User[]> {
//   const data = await prisma.user.findMany();
//   return data;
// }

type TempUser = {
  id: number;
  email: string;
  fname: string;
  lname?: string;
  username: string;
  phone: string;
  password: string;
  createdAt: Date;
};

export default async function UserList() {
  const data: TempUser[] = []

  return (
    <TableBody>
      {data.length > 0 ? (
        <>
          {data.map(
            ({ fname, lname, email, createdAt, phone, username }, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="font-medium">
                    {fname} {lname}
                  </div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {email}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">{phone}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge
                    className="text-xs w-fit max-w-28 line-clamp-1"
                    variant="secondary"
                  >
                    {username}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  {new Date(createdAt).toDateString()}
                </TableCell>
              </TableRow>
            )
          )}
        </>
      ) : (
        <TableRow>
          <TableCell>
            <Badge variant={"secondary"}>No Data</Badge>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <Badge variant={"secondary"}>No Data</Badge>
          </TableCell>
          <TableCell className="hidden sm:table-cell">
            <Badge variant={"secondary"}>No Data</Badge>
          </TableCell>
          <TableCell className="sm:table-cell text-right">
            <Badge variant={"secondary"}>No Data</Badge>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
}
