export interface ProjectDialog {
    id: string;
    title: string;
    name: string;
    description: string;
    technologies: { name: string; icon: string }[];
    actions: { github: { label: string; icon: string }; liveTest: { label: string; icon: string } };
    footer: { closeLabel: string; previewImage: string; nextProject: { label: string; icon: string } };
}