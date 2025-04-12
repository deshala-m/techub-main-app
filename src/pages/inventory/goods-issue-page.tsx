import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Search, ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';

interface GoodsIssueItem {
  id: string;
  date: string;
  reference: string;
  department: string;
  requester: string;
  items: number;
  total: number;
  status: 'Issued' | 'Pending' | 'Rejected';
}

const mockData: GoodsIssueItem[] = [
  {
    id: '1',
    date: '2024-03-20',
    reference: 'GI-001',
    department: 'IT Department',
    requester: 'John Smith',
    items: 3,
    total: 750.00,
    status: 'Issued'
  },
  {
    id: '2',
    date: '2024-03-19',
    reference: 'GI-002',
    department: 'Sales Department',
    requester: 'Sarah Johnson',
    items: 5,
    total: 1250.00,
    status: 'Pending'
  },
  {
    id: '3',
    date: '2024-03-18',
    reference: 'GI-003',
    department: 'HR Department',
    requester: 'Mike Wilson',
    items: 2,
    total: 500.00,
    status: 'Issued'
  },
  {
    id: '4',
    date: '2024-03-17',
    reference: 'GI-004',
    department: 'Marketing Department',
    requester: 'Emily Brown',
    items: 4,
    total: 1000.00,
    status: 'Rejected'
  },
];

const GoodsIssuePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof GoodsIssueItem>('date');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (field: keyof GoodsIssueItem) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredData = mockData
    .filter(item => 
      item.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.requester.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      return sortDirection === 'asc' 
        ? aValue > bValue ? 1 : -1
        : aValue < bValue ? 1 : -1;
    });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status: GoodsIssueItem['status']) => {
    switch (status) {
      case 'Issued':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Goods Issue</h1>
        <p className="text-muted-foreground">Manage and track inventory items issued to departments.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Issue Records</CardTitle>
            <CardDescription>View and manage your goods issue records</CardDescription>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Issue
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search issues..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="rounded-md border">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] table-auto">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <button
                        className="flex items-center gap-1"
                        onClick={() => handleSort('date')}
                      >
                        Date
                        {sortField === 'date' ? (
                          sortDirection === 'asc' ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        ) : (
                          <ChevronsUpDown className="h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <button
                        className="flex items-center gap-1"
                        onClick={() => handleSort('reference')}
                      >
                        Reference
                        {sortField === 'reference' ? (
                          sortDirection === 'asc' ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        ) : (
                          <ChevronsUpDown className="h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <button
                        className="flex items-center gap-1"
                        onClick={() => handleSort('department')}
                      >
                        Department
                        {sortField === 'department' ? (
                          sortDirection === 'asc' ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        ) : (
                          <ChevronsUpDown className="h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <button
                        className="flex items-center gap-1"
                        onClick={() => handleSort('requester')}
                      >
                        Requester
                        {sortField === 'requester' ? (
                          sortDirection === 'asc' ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        ) : (
                          <ChevronsUpDown className="h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <button
                        className="flex items-center gap-1"
                        onClick={() => handleSort('items')}
                      >
                        Items
                        {sortField === 'items' ? (
                          sortDirection === 'asc' ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        ) : (
                          <ChevronsUpDown className="h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <button
                        className="flex items-center gap-1"
                        onClick={() => handleSort('total')}
                      >
                        Total
                        {sortField === 'total' ? (
                          sortDirection === 'asc' ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        ) : (
                          <ChevronsUpDown className="h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      <button
                        className="flex items-center gap-1"
                        onClick={() => handleSort('status')}
                      >
                        Status
                        {sortField === 'status' ? (
                          sortDirection === 'asc' ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        ) : (
                          <ChevronsUpDown className="h-4 w-4" />
                        )}
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((item) => (
                    <tr key={item.id} className="border-b transition-colors hover:bg-muted/50">
                      <td className="p-4 align-middle">{item.date}</td>
                      <td className="p-4 align-middle">{item.reference}</td>
                      <td className="p-4 align-middle">{item.department}</td>
                      <td className="p-4 align-middle">{item.requester}</td>
                      <td className="p-4 align-middle">{item.items}</td>
                      <td className="p-4 align-middle">${item.total.toFixed(2)}</td>
                      <td className="p-4 align-middle">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {paginatedData.length === 0 && (
                    <tr>
                      <td colSpan={7} className="p-4 text-center text-muted-foreground">
                        No records found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-muted-foreground">
              Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GoodsIssuePage; 