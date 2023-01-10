export type TLabels = {
  id: string;
  name: string;
  color: string;
  order: number;
  isFavorite: boolean;
};

export type TTasks = {
  creatorId: string;
  createdAt: string;
  assigneeId?: string | null;
  assignerId?: string | null;
  commentCount: number;
  isCompleted: boolean;
  content: string;
  description: string;
  due?: {
    date?: string;
    isRecurring?: boolean;
    datetime?: string | null;
    string?: string | null;
    timezone?: string | null;
  } | null;
  id: string;
  labels: string[];
  order: number;
  priority: number;
  projectId: string;
  sectionId?: string | null;
  parentId?: string | null;
  url: string;
};
