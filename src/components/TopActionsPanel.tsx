import NewActionButton from './NewActionButton';

const AppHeader = () => (
  <div className="flex items-center justify-between px-4 py-2 bg-white border-b">
    {/* Breadcrumb */}
    <div className="text-sm text-gray-600">
      Workspace ▸ Folder 2 ▸ <strong>Spreadsheet 3</strong>
    </div>

    {/* Search + Avatar + New Action */}
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Search within sheet"
        className="text-sm px-2 py-1 border rounded-md"
      />
      <NewActionButton />
      <img
        src="https://i.pravatar.cc/30?img=5"
        alt="Avatar"
        className="w-8 h-8 rounded-full border"
      />
    </div>
  </div>
);
