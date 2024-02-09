class ApiError extends Error
{  constructor
    (
        statuscode,
        message,
        errors=[]
    )
    {
        super(message),
        this.message= message,
        this.statuscode=statuscode,
        this.errors=errors,
        this.success=false,
        this.data= null
    }
}

export {ApiError}