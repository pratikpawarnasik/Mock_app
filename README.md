# MasterWorkspace
# Advance_Angular_Setup
# NgRxSetup

BackEnd server: - https://dummyjson.com/

ng add @ngrx/store@latest
ng add @ngrx/effects@latest
    "@ngrx/effects": "^16.0.0",
    "@ngrx/entity": "^16.0.0",
    "@ngrx/store": "^16.0.0",
    "@ngrx/store-devtools": "^16.0.0",



master-workspace/
├─ src/
│   ├─ app/
│   │   ├─ core/
│   │   │   ├─ store/
│   │   │   │   ├─ actions/
│   │   │   │   │   ├─ auth.actions.ts
│   │   │   │   │   ├─ users.actions.ts
│   │   │   │   │   ├─ posts.actions.ts
│   │   │   │   │   └─ comments.actions.ts
│   │   │   │   ├─ reducers/
│   │   │   │   │   ├─ auth.reducer.ts
│   │   │   │   │   ├─ users.reducer.ts
│   │   │   │   │   ├─ posts.reducer.ts
│   │   │   │   │   ├─ comments.reducer.ts
│   │   │   │   │   └─ index.ts
│   │   │   │   ├─ effects/
│   │   │   │   │   ├─ auth.effects.ts
│   │   │   │   │   ├─ users.effects.ts
│   │   │   │   │   ├─ posts.effects.ts
│   │   │   │   │   └─ comments.effects.ts
│   │   │   │   └─ state/
│   │   │   │       ├─ auth.state.ts
│   │   │   │       ├─ users.state.ts
│   │   │   │       ├─ posts.state.ts
│   │   │   │       └─ comments.state.ts
│   │   │   └─ services/
│   │   │       ├─ auth.service.ts
│   │   │       ├─ users.service.ts
│   │   │       ├─ posts.service.ts
│   │   │       └─ comments.service.ts
│   │   ├─ modules/
│   │   │   ├─ auth/
│   │   │   │   ├─ components/
│   │   │   │   │   ├─ login.component.ts
│   │   │   │   │   └─ register.component.ts
│   │   │   │   └─ auth.module.ts
│   │   │   ├─ users/
│   │   │   │   ├─ components/
│   │   │   │   │   ├─ user-list.component.ts
│   │   │   │   │   └─ user-details.component.ts
│   │   │   │   └─ users.module.ts
│   │   │   ├─ posts/
│   │   │   │   ├─ components/
│   │   │   │   │   ├─ post-list.component.ts
│   │   │   │   │   └─ post-details.component.ts
│   │   │   │   └─ posts.module.ts
│   │   │   ├─ comments/
│   │   │   │   ├─ components/
│   │   │   │   │   ├─ comment-list.component.ts
│   │   │   │   │   └─ comment-details.component.ts
│   │   │   │   └─ comments.module.ts
│   │   │   ├─ shared/
│   │   │   │   ├─ components/
│   │   │   │   │   ├─ shared.component.ts
│   │   │   │   └─ services/
│   │   │   │       ├─ shared.service.ts
│   │   ├─ app.module.ts
│   │   ├─ app.component.ts
│   │   ├─ app-routing.module.ts
│   ├─ assets/
│   ├─ styles/
│   ├─ environments/
└── ...




Here are the CLI commands to create the folder structure in an Angular workspace
Create a new Angular workspace:


ng new master-workspace


Change to the project directory:

cd my-project
Remember to install the required NgRx packages by running 
npm install @ngrx/store @ngrx/effects to enable NgRx functionality in your project.

Generate the core store-related files:

        ng generate module core/store --flat

npm install @ngrx/schematics --save-dev



ng generate action core/store/actions/auth
ng generate action core/store/actions/users
ng generate action core/store/actions/posts
ng generate action core/store/actions/comments

ng generate reducer core/store/reducers/auth --module=core/store
ng generate reducer core/store/reducers/users --module=core/store
ng generate reducer core/store/reducers/posts --module=core/store
ng generate reducer core/store/reducers/comments --module=core/store
ng generate effect core/store/effects/auth --module=core/store
ng generate effect core/store/effects/users --module=core/store
ng generate effect core/store/effects/posts --module=core/store
ng generate effect core/store/effects/comments --module=core/store
ng generate interface core/store/state/auth
ng generate interface core/store/state/users
ng generate interface core/store/state/posts
ng generate interface core/store/state/comments


Generate the core services:

ng generate service core/services/auth
ng generate service core/services/users
ng generate service core/services/posts
ng generate service core/services/comments


Generate the module-specific files for Auth:

ng generate module modules/auth
ng generate component modules/auth/components/login
ng generate component modules/auth/components/register


Generate the module-specific files for Users:

ng generate module modules/users
ng generate component modules/users/components/user-list
ng generate component modules/users/components/user-details


Generate the module-specific files for Posts:

ng generate module modules/posts
ng generate component modules/posts/components/post-list
ng generate component modules/posts/components/post-details


Generate the module-specific files for Comments:

ng generate module modules/comments
ng generate component modules/comments/components/comment-list
ng generate component modules/comments/components/comment-details


Generate the shared component and service:

ng generate component modules/shared/components/shared
ng generate component modules/shared/components/header
ng generate component modules/shared/components/navMenu
ng generate service modules/shared/services/shared