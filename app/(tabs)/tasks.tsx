import React from "react";
import TaskHeader from "@/components/tasks/TaskHeader";
import RecentTasks from "@/components/home/RecentTasks";
import CustomSafeareaView from "@/components/common/CustomSafeAreaView";

const TasksScreen = () => {
    return (
        <CustomSafeareaView
            backgroundColor="transparent"
            barStyle="light-content"
        >
            <TaskHeader />
            <RecentTasks />
        </CustomSafeareaView>
    );
};

export default TasksScreen;
