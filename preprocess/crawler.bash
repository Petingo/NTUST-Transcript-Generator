for i in {103..108};
do
    for k in 'H';
    do
        echo $i$k
        curl 'https://querycourse.ntust.edu.tw/querycourse/api/courses' -H 'authority: querycourse.ntust.edu.tw' -H 'sec-fetch-dest: empty' -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36' -H 'content-type: application/json; charset=utf-8' -H 'accept: */*' -H 'origin: https://querycourse.ntust.edu.tw' -H 'sec-fetch-site: same-origin' -H 'sec-fetch-mode: cors' -H 'referer: https://querycourse.ntust.edu.tw/querycourse/' -H 'accept-language: en-US,en;q=0.9,zh-TW;q=0.8,zh;q=0.7' -H 'cookie: NCCSSOA=1K8HCiujG%2FDzg53au5zjDIDda4uVmNFyhc3wRiiRHHyTK8qShibZsGrsuMoj5rR2m65Xydm9azIPbOJaHNwUIXxXjkwh4cya%2BpCHT2G43tTu3JpmsMDBP0mP7rnPlK5QUgjFvj6%2BuZwjP8TAFuaJSLMD93tblrFYfeAF%2FrvwLDvtJB%2BQvoVIVISqcAGayulJZ5eoJ53LsokfQdrCrtVjGRrmneUuPYOCqdaf7gY1k0mZkk9SEWL2UIswqnzZEKyEYDKVL090P%2FxXPo8OpmG0nmUOeMAjOaKowtFDtf6TbvhYX%2FovrQh4d%2BcWCkUqzlT2%2FZUEmY751oJXwH3qY7W4NA%3D%3D; SSOANUM=75b7788a-ca82-4b17-a5b3-6413a2c1a918; SSOADATA=sbkU4GoFGgQsrEq%2B%2FKjAuK%2BUUv7Hgx9lxfoGLPSZH28sTAPkoWzu2Jv6XMtAw9LNu6vtQL%2BE6NcUQU50cPj%2FsSSElciRZUv7J8mj9eYXJ0pDf27fRobIc1Bs8bg2xnHHQc%2Fu4kcUcZ8IKzaveigDySnTXNxwFxb0A3sbjv641zyfXKVGMdCv8BNQFsL4QqX5G6UiK73CyPRLU7O0P%2B0QmLilZrzit4Z%2BwGz3DD%2FxcpWx22L4gPe5g8%2BSK%2B9olWU%2F%2F1ZWNkcwBdI8lYrOoPhh1zrmJ1GD3JmDAzIrTHeB2o3IAO9ys5hRDe%2Bi8sAmWvxs6HXvf%2BxXc4oLzyAo8vcJTw%3D%3D; _ga=GA1.3.1498244270.1585562622; _gid=GA1.3.660060209.1585927567; SessionId=fa5cc659-402a-4d9d-b4d8-cb54a5449487' --data-binary '{"Semester":"'"$i$k"'","CourseNo":"","CourseName":"","CourseTeacher":"","Dimension":"","CourseNotes":"","ForeignLanguage":0,"OnlyGeneral":0,"OnleyNTUST":0,"OnlyUnderGraduate":0,"OnlyMaster":0,"Language":"en"}' --compressed >> "$i$k.json"
    done
done