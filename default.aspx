﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="default.aspx.cs" Inherits="cdb._default" %>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  
<meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Todo List App</title>

  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="page-wrapper">
    <!-- Form for new Todo Items -->
    <form id="new-todo-form" method="post" action="#">
<input type="button" id="btnAdd" value="click" onclick="onSub()" />
      <input type="text" name="new-todo" id="new-todo" placeholder="Enter a card item..." required />
    </form>
  
    <!-- Todo Item List -->
    <ul id="todo-items"></ul>

<div id="divCard" runat="server" >
</div>
  </div>

  <script src="db.js"></script>
  <script src="app.js"></script>
</body>
</html>
