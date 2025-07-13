
import { Router } from 'express';
import { getWorkouts, createWorkout, getWorkoutCount, getWorkoutEvents, getWorkoutById, updateWorkout } from '../lib/tools/workouts';
import { getRoutines, createRoutine, getRoutineById, updateRoutine } from '../lib/tools/routines';
import { getExerciseTemplates, getExerciseTemplateById } from '../lib/tools/exerciseTemplates';
import { getRoutineFolders, createRoutineFolder, getRoutineFolderById } from '../lib/tools/routineFolders';
import { createWebhookSubscription, deleteWebhookSubscription, getWebhookSubscription } from '../lib/tools/webhook';
import { 
    GetWorkoutsParams, CreateWorkoutParams, GetWorkoutEventsParams, GetWorkoutByIdParams, UpdateWorkoutParams,
    GetRoutinesParams, CreateRoutineParams, GetRoutineByIdParams, UpdateRoutineParams,
    GetExerciseTemplatesParams, GetExerciseTemplateByIdParams,
    GetRoutineFoldersParams, CreateRoutineFolderParams, GetRoutineFolderByIdParams,
    WebhookSubscriptionParams
} from '../lib/types';

const router = Router();

router.post('/execute', async (req, res) => {
  const { tool, parameters } = req.body;

  try {
    let result;
    switch (tool) {
      case 'getWorkouts':
        result = await getWorkouts(parameters as GetWorkoutsParams);
        break;
      case 'createWorkout':
        result = await createWorkout(parameters as CreateWorkoutParams);
        break;
      case 'getWorkoutCount':
        result = await getWorkoutCount(parameters);
        break;
      case 'getWorkoutEvents':
        result = await getWorkoutEvents(parameters as GetWorkoutEventsParams);
        break;
      case 'getWorkoutById':
        result = await getWorkoutById(parameters as GetWorkoutByIdParams);
        break;
      case 'updateWorkout':
        result = await updateWorkout(parameters as UpdateWorkoutParams);
        break;
      case 'getRoutines':
        result = await getRoutines(parameters as GetRoutinesParams);
        break;
      case 'createRoutine':
        result = await createRoutine(parameters as CreateRoutineParams);
        break;
      case 'getRoutineById':
        result = await getRoutineById(parameters as GetRoutineByIdParams);
        break;
      case 'updateRoutine':
        result = await updateRoutine(parameters as UpdateRoutineParams);
        break;
      case 'getExerciseTemplates':
        result = await getExerciseTemplates(parameters as GetExerciseTemplatesParams);
        break;
      case 'getExerciseTemplateById':
        result = await getExerciseTemplateById(parameters as GetExerciseTemplateByIdParams);
        break;
      case 'getRoutineFolders':
        result = await getRoutineFolders(parameters as GetRoutineFoldersParams);
        break;
      case 'createRoutineFolder':
        result = await createRoutineFolder(parameters as CreateRoutineFolderParams);
        break;
      case 'getRoutineFolderById':
        result = await getRoutineFolderById(parameters as GetRoutineFolderByIdParams);
        break;
      case 'createWebhookSubscription':
        result = await createWebhookSubscription(parameters as WebhookSubscriptionParams);
        break;
      case 'deleteWebhookSubscription':
        result = await deleteWebhookSubscription();
        break;
      case 'getWebhookSubscription':
        result = await getWebhookSubscription();
        break;
      default:
        return res.status(400).json({ error: 'Invalid tool' });
    }
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
