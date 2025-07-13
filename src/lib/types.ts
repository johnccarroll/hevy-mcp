
// General purpose interfaces
export interface PaginatedResponse<T> {
    page: number;
    page_count: number;
    items: T[];
}

// Schemas for API objects
export interface WorkoutSet {
    type: "warmup" | "normal" | "failure" | "dropset";
    weight_kg?: number | null;
    reps?: number | null;
    distance_meters?: number | null;
    duration_seconds?: number | null;
    custom_metric?: number | null;
    rpe?: number | null;
}

export interface WorkoutExercise {
    exercise_template_id: string;
    superset_id?: number | null;
    notes?: string | null;
    sets: WorkoutSet[];
}

export interface Workout {
    id: string;
    title: string;
    description?: string | null;
    start_time: string;
    end_time: string;
    is_private?: boolean;
    exercises: WorkoutExercise[];
    updated_at: string;
    created_at: string;
}

export interface RoutineSet {
    type: "warmup" | "normal" | "failure" | "dropset";
    weight_kg?: number | null;
    reps?: number | null;
    distance_meters?: number | null;
    duration_seconds?: number | null;
    custom_metric?: number | null;
}

export interface RoutineExercise {
    exercise_template_id: string;
    superset_id?: number | null;
    rest_seconds?: number | null;
    notes?: string | null;
    sets: RoutineSet[];
}

export interface Routine {
    id: string;
    title: string;
    folder_id?: number | null;
    notes?: string;
    exercises: RoutineExercise[];
    updated_at: string;
    created_at: string;
}

export interface ExerciseTemplate {
    id: string;
    title: string;
    type: string;
    primary_muscle_group: string;
    secondary_muscle_groups: string[];
    is_custom: boolean;
}

export interface RoutineFolder {
    id: number;
    index: number;
    title: string;
    updated_at: string;
    created_at: string;
}

export interface WebhookSubscription {
    url: string;
    auth_token: string;
}

// Parameter interfaces for tool functions
export interface GetWorkoutsParams {
    page?: number;
    pageSize?: number;
}
export interface GetWorkoutEventsParams {
    page?: number;
    pageSize?: number;
    since?: string;
}

export interface CreateWorkoutParams {
    workout: {
        title: string;
        description?: string | null;
        start_time: string;
        end_time: string;
        is_private?: boolean;
        exercises: WorkoutExercise[];
    }
}

export interface GetWorkoutByIdParams {
    workoutId: string;
}

export interface UpdateWorkoutParams extends CreateWorkoutParams {
    workoutId: string;
}

export interface GetRoutinesParams {
    page?: number;
    pageSize?: number;
}

export interface CreateRoutineParams {
    routine: {
        title: string;
        folder_id?: number | null;
        notes?: string;
        exercises: RoutineExercise[];
    }
}

export interface GetRoutineByIdParams {
    routineId: string;
}

export interface UpdateRoutineParams {
    routineId: string;
    routine: {
        title: string;
        notes?: string | null;
        exercises: RoutineExercise[];
    }
}

export interface GetExerciseTemplatesParams {
    page?: number;
    pageSize?: number;
}

export interface GetExerciseTemplateByIdParams {
    exerciseTemplateId: string;
}

export interface GetRoutineFoldersParams {
    page?: number;
    pageSize?: number;
}

export interface CreateRoutineFolderParams {
    routine_folder: {
        title: string;
    }
}

export interface GetRoutineFolderByIdParams {
    folderId: string;
}

export interface WebhookSubscriptionParams {
    url: string;
    authToken: string;
}
