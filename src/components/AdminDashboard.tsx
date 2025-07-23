import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, Heart, MapPin, Search, Filter,
  MoreHorizontal, User, Clock, Star 
} from "lucide-react";

interface UserProfile {
  id: string;
  name: string;
  age: number;
  joinDate: string;
  status: "matched" | "pending" | "surveying";
  compatibilityScore?: number;
  matchedWith?: string;
  roomAssignment?: string;
  sleepStyle: string;
  cleanliness: string;
  socialLevel: string;
}

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "matched" | "pending" | "surveying">("all");

  // Mock data
  const users: UserProfile[] = [
    {
      id: "1",
      name: "Emma Chen",
      age: 24,
      joinDate: "2024-01-15",
      status: "matched",
      compatibilityScore: 95,
      matchedWith: "Sophie Williams",
      roomAssignment: "A-201",
      sleepStyle: "early-bird",
      cleanliness: "very-clean",
      socialLevel: "balanced"
    },
    {
      id: "2", 
      name: "Sophie Williams",
      age: 23,
      joinDate: "2024-01-14",
      status: "matched",
      compatibilityScore: 95,
      matchedWith: "Emma Chen", 
      roomAssignment: "A-201",
      sleepStyle: "early-bird",
      cleanliness: "very-clean",
      socialLevel: "social-butterfly"
    },
    {
      id: "3",
      name: "Maya Patel",
      age: 26,
      joinDate: "2024-01-20",
      status: "pending",
      sleepStyle: "night-owl",
      cleanliness: "moderately-clean",
      socialLevel: "introverted"
    },
    {
      id: "4",
      name: "Jessica Kim",
      age: 22,
      joinDate: "2024-01-22",
      status: "surveying",
      sleepStyle: "flexible",
      cleanliness: "relaxed",
      socialLevel: "balanced"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "matched": return "bg-success/20 text-success-foreground border-success/30";
      case "pending": return "bg-warning/20 text-warning-foreground border-warning/30";
      case "surveying": return "bg-primary/20 text-primary-foreground border-primary/30";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: users.length,
    matched: users.filter(u => u.status === "matched").length,
    pending: users.filter(u => u.status === "pending").length,
    surveying: users.filter(u => u.status === "surveying").length
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center shadow-elegant">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h1 className="font-heading text-3xl font-bold text-foreground">
              Rumi Admin Dashboard
            </h1>
          </div>
          <p className="text-muted-foreground">
            Manage user profiles, matches, and room assignments
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="gradient-card border-0 shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Users</p>
                <p className="font-heading text-2xl font-bold text-foreground">{stats.total}</p>
              </div>
              <Users className="w-8 h-8 text-primary" />
            </div>
          </Card>

          <Card className="gradient-card border-0 shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Matched</p>
                <p className="font-heading text-2xl font-bold text-success">{stats.matched}</p>
              </div>
              <Heart className="w-8 h-8 text-success" />
            </div>
          </Card>

          <Card className="gradient-card border-0 shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pending Match</p>
                <p className="font-heading text-2xl font-bold text-warning">{stats.pending}</p>
              </div>
              <Clock className="w-8 h-8 text-warning" />
            </div>
          </Card>

          <Card className="gradient-card border-0 shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">In Survey</p>
                <p className="font-heading text-2xl font-bold text-primary">{stats.surveying}</p>
              </div>
              <Star className="w-8 h-8 text-primary" />
            </div>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="gradient-card border-0 shadow-soft p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="flex gap-2">
              {["all", "matched", "pending", "surveying"].map((status) => (
                <Button
                  key={status}
                  variant={filterStatus === status ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilterStatus(status as any)}
                  className="capitalize"
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Users Table */}
        <Card className="gradient-card border-0 shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-heading font-semibold text-foreground">User</th>
                  <th className="text-left p-4 font-heading font-semibold text-foreground">Status</th>
                  <th className="text-left p-4 font-heading font-semibold text-foreground">Match Info</th>
                  <th className="text-left p-4 font-heading font-semibold text-foreground">Room</th>
                  <th className="text-left p-4 font-heading font-semibold text-foreground">Lifestyle</th>
                  <th className="text-right p-4 font-heading font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={user.id} className={index % 2 === 0 ? "bg-background/50" : ""}>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{user.name}</p>
                          <p className="text-sm text-muted-foreground">Age {user.age}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      {user.status === "matched" ? (
                        <div>
                          <div className="flex items-center gap-1 mb-1">
                            <Heart className="w-4 h-4 text-success" />
                            <span className="text-sm font-medium text-success">
                              {user.compatibilityScore}% Match
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            with {user.matchedWith}
                          </p>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">-</span>
                      )}
                    </td>
                    <td className="p-4">
                      {user.roomAssignment ? (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-foreground">
                            {user.roomAssignment}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm text-muted-foreground">Not assigned</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          {user.sleepStyle}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {user.cleanliness}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {user.socialLevel}
                        </Badge>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;