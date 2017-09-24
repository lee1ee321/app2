//当前代码必须在db.js之后执行
var pool=require('./pool');

if(!pool){
    return;
}
function findAll(handler){
//查询所有学生
    pool.getConnection(function(err,connection){
            if(err){
                throw err
         }else{
                var sql='select * from xk_student';
             connection.query(sql,function(err,results){
                     if(err){
                        throw err
                     }else{
                    handler.call(this,results);
                    }
                    connection.release();
                        });
         }
     });
} 

//删除
function bathDelete(ids,handler){
    pool.getConnection(function(err,connection){
           if(err){
            throw err
           }else{
            var sql='delete from xk_student where id =?';
            connection.query(sql,[id],function(err,results){
                    if(err){
                        throw err
                    }else{
                        handler.call(this,results);
                        connection.release();
                    }
                    });
           }
           
            })    
}
//通过id查找学生
function findById(id,handler){
    pool.getConnection(function(err,connection){
            if(err){
                throw err
            }else{
            var sql='select *  from xk_student where id= ?';
            connection.query(sql,[id],function(err,results){
                   if(err){
                    throw err
                   }else{
                   handler.call(this,results);
                   }
                   connection.release();
                    });
            }
            });
}
module.exports={
    findAll:findAll,
    deleteById:deleteById,
    findById:findById
}


