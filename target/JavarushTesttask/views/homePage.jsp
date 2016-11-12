<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title>List of Users</title>
    <meta charset="utf-8"/>

    <script src="/resources/js/jquery-3.1.0.min.js"></script>
    <script src="/resources/bootstrap-3.3.7-dist/js/bootstrap.js"></script>
    <script src="/resources/js/getAllUsers.js"></script>
    <script src="/resources/js/findAllUsers.js"></script>
    <script src="/resources/js/addUser.js"></script>
    <script src="/resources/js/editUser.js"></script>
    <script src="/resources/js/removeUser.js"></script>
    <script src="/resources/js/findByName.js"></script>
    <script src="/resources/js/paging.js"></script>

    <style>
        h3 {
            margin-left: 2%;
            padding: 0;
        }
        ul.pagination {
            display: inline-block;
            padding: 0;
            margin: 0;
        }

        ul.pagination li {display: inline;}

        ul.pagination li a {
            color: black;
            float: left;
            padding: 8px 16px;
            text-decoration: none;
        }
    </style>

</head>
<body>

<h3>Add user</h3>
<form:form role="form">
    <table frame="border" cellspacing="5" cellpadding="4">
        <tr>
            <td align="right" width="40">Name: </td>
            <td><input type="text" id="name"></td>

            <td align="right" width="40">Age: </td>
            <td><input type="text" width="40" id="age"></td>

            <td align="right" width="40">IsAdmin: </td>
            <td><input type="text" width="40" id="isAdmin"></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td align="right"><button id="addUser">Submit</button></td>
        </tr>
    </table>

</form:form>

    <table border="1">
        <thead align="center" >
        <tr>
            <th width="60">Id</th>
            <th width="160">Name</th>
            <th width="80">Age</th>
            <th width="100">Is admin</th>
            <th width="140">Created date</th>
            <th width="80">Edit</th>
            <th width="80">Remove</th>
        </tr>
        </thead>
        <tbody id="allUsers" align="center">
        </tbody>
    </table>
    <br>
    <ul class="pagination" style="margin: 1% 0% 0% 10%">

    </ul>

    <table>
        <tr>
            <td>
                <button id="findAllUser">Show All Users</button>
            </td>
            <td width="300" align="right">Enter name for search:</td>
            <td>
                <input type="text" id="findName">
                <button id="findByName" class="btn btn-info">Search</button>
            </td>
        </tr>
    </table>

<div id="myModal" tabindex="-1">
    <h3>Edit user</h3>
            <div>
                <form:form role="form">

                    <table frame="border" cellspacing="5" cellpadding="4">
                        <tr>
                            <td align="right" width="40">Name: </td>
                            <td><input type="text" id="nameEdit"></td>

                            <td align="right" width="40">Age: </td>
                            <td><input type="text" id="ageEdit"></td>

                            <td align="right" width="40">IsAdmin: </td>
                            <td><input type="text" id="isAdminEdit"></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td align="right"><button id="submitEditUser">Submit</button></td>
                        </tr>
                    </table>
                </form:form>
            </div>

</div>

</body>
</html>
